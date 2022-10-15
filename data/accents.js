function area(area, places) {
  return { area, places }
}

function region(region, areas) {
  return { region, areas }
}

const accents = [
  region('United States', [area('West Coast', ['Washington', 'Alaska', 'California']), area('Southern States', ['Texas', 'South Carolina', 'Alabama']), area('East Coast', ['New York', 'New Hampshire', 'Massachusetts']), area('Midwest', ['Wisconsin', 'Minnesota', 'Michigan'])]),
  region('International', [area('British Isles', ['RP', 'Scottish', 'Irish']), area('Spanish (fluent)', ['Mexico', 'Spain', 'Latin America']), area('Western Europe', ['France', 'Italy', 'Germany']), area('Eastern Europe', ['Poland', 'Ukraine', 'Russia']), area('Other', ['Australia', 'Canada', 'Norway'])]),
]

export default accents
