USE wyft;
DROP TABLE IF EXISTS hosting_sessions;
DROP TABLE IF EXISTS guests;
DROP TABLE IF EXISTS hosts;
-- SET FOREIGN_KEY_CHECKS = 0;
-- TRUNCATE TABLE hosting_sessions;
-- TRUNCATE TABLE guests;
-- TRUNCATE TABLE hosts;

#mysql -u root -p < seed/truncate_table.sql