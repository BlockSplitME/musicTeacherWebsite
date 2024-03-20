# abort on errors 
set -e 

# build 
echo Building. this may take a minute... 
npm run build 

echo Deploying.. 
git add -A 
git commit -m 'deploy' 
git push