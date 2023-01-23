const { Pool } = require('pg');

const pool = new Pool({
  user: 'rebeccakurtis',
  host: 'localhost',
});

pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohorts
FROM teachers 
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
ORDER BY teachers.name;
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohorts}: ${user.teacher}`);
    });
  })
  .catch(err => console.error('query error', err.stack));