CREATE TABLE `tasks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`text` varchar(255) NOT NULL,
	`finished` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL,
	CONSTRAINT `tasks_id` PRIMARY KEY(`id`)
);
