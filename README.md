# 个人知识库

基于 Quartz 5.2.2。用 Obsidian 打开 `content/` 编辑公开笔记。笔记须包含 YAML 属性 `publish: true` 才会进入网站；只引用可以公开的附件。私稿和私有附件须留在公开 Git 仓库之外。

## 本地预览

使用 Node.js 22 和 npm 10.9.2 或更新版本。

```sh
npm ci
npm run quartz -- build --serve
```

打开 http://localhost:8080/。Markdown 正文支持常见 HTML 片段，例如 `<details>`，示例在「写作与发布」。

## GitHub Pages

在仓库的 Settings → Pages → Build and deployment 中将 Source 选为 GitHub Actions。推送到 `main`，或在 Actions 手动运行 Deploy Quartz to GitHub Pages，即会构建并发布。工作流从 Pages 读取站点地址，所以根站点与项目子路径均可使用。

Quartz 上游为 [jackyzha0/quartz](https://github.com/jackyzha0/quartz)，许可证见 LICENSE.txt。
