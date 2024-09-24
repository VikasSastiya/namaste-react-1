transitive dependencies

if you have package.json, packagelock.json you can regenrate node_modules- npm install
to run type npx parcel index.html

npm-installing a package , npx-mean executing a package

cdn links are not preferred way to instal react correct way is - npm install react
- to create package.json and packagelock.json type npm init


# Parcel
- Dev Build
- Local Server
- HMR = Hot Model Replacement - written in C++
- Caching - Faster Bilds
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling 
- HTTPS
- Tree Shaking algorithm - remove unused code
- Different dev and prod bundles

- we do not put dist and .parcel-cache to git decause as we have package.json and packagelock.json we can recreate node_modules and with node_modules we can recreate dist and .parcel-cache file



# https://parceljs.org/getting-started/webapp/
- visit the site for parcel doccumentation and codes

- npm parcel build index.html