cd D:\okcanvas.github.io

git add .
git commit -m "Update portfolio"
git push

yarn docs:build

git fetch origin

git worktree add --detach ..\okcanvas-gh-pages
cd ..\okcanvas-gh-pages

git checkout --orphan gh-pages
git rm -rf . >nul 2>nul

xcopy "D:\okcanvas.github.io\docs\.vitepress\dist\*" "." /E /I /Y

type nul > .nojekyll

git add .
git commit -m "Deploy portfolio"
git push -u origin gh-pages --force

cd D:\okcanvas.github.io
git worktree remove ..\okcanvas-gh-pages --force