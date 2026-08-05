import fs from "fs";
import path from "path";

const html = fs.readFileSync(
  path.join(process.cwd(), "public", "index.html"),
  "utf8"
);

test("uses professional identity and search metadata", () => {
  expect(html).toContain("<title>Luis Mendes | Network Engineer</title>");
  expect(html).toContain('name="author" content="Luis Mendes"');
  expect(html).toContain('rel="canonical" href="https://cvmendes.com/"');
  expect(html).toContain('property="og:title"');
  expect(html).toContain('name="twitter:card" content="summary"');
  expect(html).not.toContain("Create React App");
  expect(html).not.toContain("React App");
});
