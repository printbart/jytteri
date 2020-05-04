/*get single event information*/
SELECT e.*, u.username, COUNT(a.userID) AS joinCount FROM Events e
LEFT JOIN Attend a ON e.eventID = a.eventID
INNER JOIN Users u ON u.userID = e.hostID
GROUP BY e.eventID;