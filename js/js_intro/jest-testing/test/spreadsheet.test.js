const duplicateSpreadsheet = require('../src/spreadsheet')

// in your test file
it("doesn't mutate the original", () => {
  
    const spreadSheet = {
      author: "Billy Bob",
      cells: 'some spreadsheet cells...',
      metadata: {
        title: 'Some kind of spreadsheet'
      }
    }
    
    duplicateSpreadsheet(spreadSheet)
    expect(spreadSheet.metadata.title).toBe('Some kind of spreadsheet')
  })