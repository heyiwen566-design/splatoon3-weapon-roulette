# 斯普拉遁 3 随机武器转盘

一个静态网页原型，用 sendou.ink 公开仓库里的 Splatoon 3 武器贴图做随机转盘。

## 使用

直接打开 `index.html`，或在此目录启动一个静态服务器：

```sh
python3 -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 数据来源

武器 ID、分类、英文名称和原始贴图参考 `sendou-ink/sendou.ink`：

- `locales/en/weapons.json`
- `app/modules/in-game-lists/weapon-ids.ts`
- `public/static-assets/img/main-weapons/*.avif`
- `public/static-assets/img/sub-weapons/*.avif`
- `public/static-assets/img/special-weapons/*.avif`
- Ver.10.0.0 新武器套装参考 `https://splatoon.com.cn/update-history/detail/34`

当前页面使用本项目内的 WebP 图标：

- `assets/weapons/*.webp`
- `assets/sub-weapons/*.webp`
- `assets/special-weapons/*.webp`

如需重新拉取并转换贴图，运行：

```sh
/Users/yiwen/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 scripts/download_assets.py
```

## 当前功能

- 转盘随机抽取武器，带减速动画、tick 音效和命中闪光。
- 按武器类别筛选，并可隐藏贴牌/亚种，只保留每个武器家族原版。
- 搜索武器名称或家族，支持批量“选中可见”和“排除可见”。
- 可单独勾选/排除某把武器。
- 武器、副武器、大招显示中文主名和英文副名；搜索支持中英文。
- 抽中后显示武器贴图、类别、ID、历史记录，以及已补全数据的副武器和大招。
