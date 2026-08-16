# 臺灣地震模擬器 MVP

這是一個單頁式的臺灣地震模擬器網站原型，包含：

- 全臺縣市與行政區選址
- 震央與所在地雙選址
- 101 等級高樓倒塌模擬
- 3D 互動畫面
- 樓層選擇
- P 波 / S 波到達倒數

## 本地開啟

直接用瀏覽器打開 `index.html` 即可。

## 推上 GitHub

如果這個資料夾還沒有初始化成 Git 倉庫，先執行：

```bash
git init
```

接著依序執行：

```bash
git add .
git commit -m "Initial earthquake simulator MVP"
git branch -M main
git remote add origin <你的 GitHub 倉庫網址>
git push -u origin main
```

## 如果要用 GitHub Pages

1. 把倉庫推上去。
2. 到 GitHub 倉庫的 Settings。
3. 找到 Pages。
4. Source 選 `Deploy from a branch`。
5. Branch 選 `main`，folder 選 `/ (root)`。
6. 儲存後等幾分鐘即可看到網站。
