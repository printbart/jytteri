/*get single event information*/
SELECT DISTINCT e.*, u.username, COUNT(a.userID) AS guestCount,
(CASE WHEN EXISTS(SELECT 1 FROM Attend a INNER JOIN Events e ON a.eventID = e.eventID
WHERE e.longitude = -75.69719309999999 AND e.latitude =  45.4215296 AND userID = 6) THEN 1 ELSE 0 END) AS status
FROM Events e
LEFT JOIN Attend a ON e.eventID = a.eventID
INNER JOIN Users u ON u.userID = e.hostID
WHERE e.longitude = -75.68313289999999 AND e.latitude =  45.42310639999999
GROUP BY e.eventID;