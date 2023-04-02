# DOCUMENTARY

This web-app is created with following tech-stack:-

- React (TypeScript)
- Express (TypeScript)
- MySQL
- SendGrid

##### Schema

```sql
CREATE SCHEMA blogit;
```

##### Table - Users

```sql
CREATE TABLE `users`(
    `id` BIGINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(50) NOT NULL,
    `full_name` VARCHAR(100) NOT NULL,
    `password` TEXT NOT NULL,
    `title` VARCHAR(100) NULL,
    `age` SMALLINT NULL,
    `location` VARCHAR(100) NULL,
    `education` VARCHAR(255) NULL,
    `profile_picture` TEXT NULL,
    `facebook` VARCHAR(255) NULL,
    `instagram` VARCHAR(255) NULL,
    `twitter` VARCHAR(255) NULL,
    `github` VARCHAR(255) NULL,
    `gitlab` VARCHAR(255) NULL,
    `linkedin` VARCHAR(255) NULL
);
```

##### Table - Followers

```sql
CREATE TABLE followers(
	id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  user1 BIGINT UNSIGNED NOT NULL,
  user2 BIGINT UNSIGNED NOT NULL,
  date_followed VARCHAR(100) NOT NULL,
  FOREIGN KEY (user1) REFERENCES users(id),
  FOREIGN KEY (user2) REFERENCES users(id)
);
```

##### Table - Blogs

```sql
CREATE TABLE blogs(
	id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  content LONGTEXT NOT NULL,
  image TEXT NOT NULL,
  blog_status VARCHAR(10) NOT NULL,
  date_created VARCHAR(100) NOT NULL,
  up_votes BIGINT NOT NULL,
  down_votes BIGINT NOT NULL,
  user_name BIGINT UNSIGNED NOT NULL,
  FOREIGN KEY (user_name) REFERENCES users(id)
);
```
