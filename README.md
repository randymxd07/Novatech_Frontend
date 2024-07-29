# Novatech Platform

This is a web platform to help users or companies that do not have knowledge of technology to be guided and advised so that they can have a successful digital transformation in their businesses or companies.

## Getting started

### 1. Clone the repository

```sh
git clone https://github.com/randymxd06/Novatech_Frontend.git
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Copy the file ```.env.template``` and rename it to ```.env``` then put the values ​​of the variables such as the API URL and the wizard URL

```env
VITE_NESTGPT_API=http://localhost:3000/gpt

VITE_ASSISTANT_API=http://localhost:3000/sam-assistant
```

### 4. Run the project

```bash
yarn dev
```

## Production

```bash
yarn build
```

When it finishes, the `dist` folder will be created and you can put it on hosting or the hosting service you prefer.

## License

The MIT License
