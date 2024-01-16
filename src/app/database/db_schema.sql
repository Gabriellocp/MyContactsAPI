-- Create the database for the project
CREATE DATABASE mycontacts;
-- Add extension to generate ids dinamically by the db
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- Create table for the categories
CREATE TABLE IF NOT EXISTS category (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL
);

-- Create table for the contacts
CREATE TABLE IF NOT EXISTS contacts (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    email VARCHAR,
    phone VARCHAR,
    category_id UUID,
    FOREIGN KEY(category_id) REFERENCES category(id)
);

-- Change ON DELETE to delete all references when category is deleted
ALTER TABLE contacts DROP CONSTRAINT contacts_category_id_fkey;
ALTER TABLE contacts ADD CONSTRAINT contacts_category_id_fkey 
FOREIGN KEY(category_id) REFERENCES category(id) ON DELETE SET NULL;