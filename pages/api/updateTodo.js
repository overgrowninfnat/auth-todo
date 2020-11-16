import { minifyRecord, table } from './utils/airtable';
import auth0 from './utils/auth0';

export default auth0.requireAuthentication(async (req, res) => {
  const { id, fields } = req.body;
  try {
    const notMinifiedUpdatedRecord = await table.update([{ id, fields }]);
    const updatedRecord = minifyRecord(notMinifiedUpdatedRecord[0]);
    res.status(200).json(updatedRecord);
  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong' });
  }
});
