-- CreateTable
create table "Match" (
  "id" integer not null,
  constraint "Match_pkey" primary key ("id")
);

-- CreateEnum
create type "Position" as ENUM (
  'TOP',
  'JUNGLE',
  'MIDDLE',
  'BOTTOM',
  'SUPPORT'
);

-- CreateTable
create table "Participant" (
  "championKey" integer not null,
  "matchId" integer not null,
  "mythic" integer,
  "participantId" integer not null,
  "position" "Position" not null,
  "win" boolean not null,
  "items" integer[6],
  "primaryRunes" integer[4],
  "secondaryRunes" integer[3],
  "skills" integer[],
  "spells" integer[2],
  "startingItems" integer[],
  "statRunes" integer[3],
  constraint "Participant_pkey" primary key ("matchId", "participantId")
);

-- AddForeignKey
alter table "Participant"
  add constraint "Participant_matchId_fkey" foreign key ("matchId") references "Match" ("id") on delete restrict on update cascade;

-- CreateIndex
create index "Participant_matchId_idx" on "Participant" ("matchId");

-- CreateIndex
create index "Participant_championKey_idx" on "Participant" ("championKey");

-- CreateIndex
create index "Participant_items_idx" on "Participant" using GIN (items);

