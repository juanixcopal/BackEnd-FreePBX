const querys = {
  getDataByDestination: `
  SELECT * FROM cdr WHERE dst = ?
    `
}

export default querys

// SELECT * FROM cel WHERE eventtype='CHAN_START' AND cid_name IS NOT NULL AND cid_num IS NOT NULL;
