create database casino;
-------------------------------------game_types
create table game_types
(
	id int not null,
	name varchar not null
);

create unique index game_types_id_uindex
	on game_types (id);
create unique index game_types_name_uindex
	on game_types (type);
alter table game_types
	add constraint game_types_pk
		primary key (id);

-------------------------------------games
create table games
(
	id serial not null,
	name varchar not null,
	type_id int
		constraint games_game_types_id_fk
			references game_types,
	countries varchar not null
);

create unique index games_id_uindex
	on games (id);

alter table games
	add constraint games_pk
		primary key (id);


-------------------------------------staff
create table staff
(
	id int,
	name varchar,
	position varchar
);

create unique index staff_id_uindex
	on staff (id);

alter table staff
	add constraint staff_pk
		primary key (id);
-------------------------------------my info
INSERT INTO public.staff (id, name, position, salary) VALUES (1, 'Almas Toimbekov', 'Senior Software Developer')
-------------------------------------players
create table players
(
	id int,
	country varchar not null,
	favorite_game_id int
    constraint players_favorite_game_id_fk
      references game_types
);

create unique index players_id_uindex
	on players (id);

alter table players
	add constraint players_pk
		primary key (id);

-------------------------------------query
WITH game_id as (
  SELECT id from game_types
  WHERE name = 'SLOT'
  )
  select * from players
  where players.favorite_game_id in (select * from game_id)