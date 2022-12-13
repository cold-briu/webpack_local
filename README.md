# basic_webpack
Probando webpack

(desactualizado, ver video de la clase)

1. Crear repo en github
	- gitignore: Node
	- license: MIT
	- add readme

2. Clonar ese repo en nuestra máquina local
		$ git clone (url)
	
3. Abrir ese proyecto con visual
		$ code (ruta de la carpeta del repo)

4. Crear nuestro proyecto de NPM
		$ npm init -y

5. Instalar dependencias

		"devDependencies": {
			"@babel/core": "^7.20.5",
			"@babel/preset-env": "^7.20.2",
			"babel-loader": "^8.0.4",
			"html-webpack-plugin": "^5.5.0",
			"webpack": "^5.75.0",
			"webpack-cli": "^5.0.1"
		}

		$ npm install 

6. Agregar scripts de webpack
		"dev": "webpack --mode development",
  		"build": "webpack --mode production"

7. Crear entry point
		$ mkdir src
		$ touch src/index.js

8. Empaquetamos en modo dev
		$ npm run dev

9. Creamos archivo html en dist

10. Instalamos plugin para html
		$ npm install html-webpack-plugin --save-dev

11. Creamos archivo de config
		$ touch webpack.config.js

