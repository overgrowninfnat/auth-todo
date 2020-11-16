import { minifyRecord, table } from './utils/airtable';
import auth0 from './utils/auth0';

export default auth0.requireAuthentication(async (req, res) => {
  const { id } = req.body;
  try {
    const notMinifiedDeletedRecords = await table.destroy([id]);
    const deletedRecord = minifyRecord(notMinifiedDeletedRecords[0]);
    res.status(200).json(deletedRecord);
  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong' });
  }
});
