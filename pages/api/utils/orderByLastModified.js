export default function compare(a, b) {
    if (a.fields.lastModified > b.fields.lastModified) return -1;
    if (b.fields.lastModified > a.fields.lastModified) return 1;
  
    return 0;
  }


