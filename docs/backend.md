Hasura provides GraphQL engine to interact with Postgres database.

## Available Scripts

In the project directory, you can run -after running start script-:

### `yarn hasura migrate create "<migration_name>" --from-server --project ./hasura`

Creates a new migration with changes in postgres database schema.

### `yarn export-metadata`

Updates metadata to match server's.

### `yarn apply-metadata`

Applies metadata to server.

### `yarn apply-migrations`

Applies migrations to postgres database.

## Database schema

### Menu table structure

```
menuId     integer-autoincrement primary key
name       text
type       text
price      money
photo      text
```
