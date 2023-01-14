SELECT count(name)
FROM students
WHERE cohort_id <= 3;

-- compass suggestion:
-- SELECT count(id)
-- FROM students
-- WHERE cohort_id IN (1,2,3);