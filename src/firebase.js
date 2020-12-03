import Axios from 'axios';

const get = async doc => {
  try {
    const response = await Axios.get(
      `https://firestore.googleapis.com/v1/projects/peer-prank/databases/(default)/documents/${doc}`
    );
    const raw = response.data.documents.map(doc => doc.fields);

    return raw.map(fields => {
      const newVal = {};
      for (const key in fields) {
        if (!Object.prototype.hasOwnProperty.call(fields, key)) continue;
        const rawVal = fields[key];
        newVal[key] = rawVal.stringValue || parseInt(rawVal.integerValue);
      }
      return newVal;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSounds = async () => await get('sounds');
export const getPictures = async () => await get('pictures');
