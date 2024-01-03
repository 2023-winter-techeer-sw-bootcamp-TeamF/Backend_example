CREATE TABLE visits (
    visitor_name varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    visit_datetime datetime DEFAULT NOW() NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
