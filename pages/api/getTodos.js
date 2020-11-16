import { minifyRecord, table } from './utils/airtable';
import compare from './utils/orderByLastModified';
import auth0 from './utils/auth0';

export default auth0.requireAuthentication(async (req, res) => {
  const { user } = await auth0.getSession(req);
  try {
    const notMinifiedRecords = await table
      .select({
        filterByFormula: `userId = '${user.sub}'`,
      })
      .firstPage();
    const unorderedRecords = notMinifiedRecords.map((record) =>
      minifyRecord(record)
    );
    const records = unorderedRecords.sort(compare);
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong' });
  }
});
