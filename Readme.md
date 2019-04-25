# Get Started

### Clone the repository

```
git clone https://github.com/graphql-zeroconf/zeroconf_postgres_template.git
```

### Install the packages

```
cd zeroconf_postgres_template
npm install
```

### Create your .env file on your project root

```
cat <<EOF >.env
POSTGRES_HOST=
POSTGRES_PORT=5432
POSTGRES_DATABASE=
POSTGRES_USER=
POSTGRES_PASSWORD=
GRAPHQL_HOST=localhost
GRAPHQL_PORT=4000
EOF
```

### Start with graphql

```
$ npm start
```

or

```
$ npm run graphql
```

### Start with apollo

```
$ npm run apollo
```