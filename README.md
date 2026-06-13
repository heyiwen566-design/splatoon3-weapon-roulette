# 斯普拉遁 3 随机武器转盘

一个静态网页原型，用 sendou.ink 公开仓库里的 Splatoon 3 主武器贴图做随机转盘。

## 使用

直接打开 `index.html`，或在此目录启动一个静态服务器：

```sh
python3 -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 数据来源

武器 ID、分类、英文名称和贴图路径参考 `sendou-ink/sendou.ink`：

- `locales/en/weapons.json`
- `app/modules/in-game-lists/weapon-ids.ts`
- `public/static-assets/img/main-weapons/*.avif`

当前页面直接从 GitHub raw URL 加载贴图；离线时仍可抽选和显示武器名称。
