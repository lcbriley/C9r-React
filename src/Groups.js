export const Groups = [
  {
    id: "1",
    single: '1',
    name: 'Global',
    count: 3,
    userCreated: 1,
    toggled: false,
    expanded: false,
    fieldGroupId: 1,
    position: 1,
    fields: [
        {
        id: "1",
        fieldName: "USER CREATED Field 1",
        scope: "Global",
        fieldType: "Yes/No",
        user: "Claire Briley",
        //fieldGroupId: 4
        familyTagging: true,
        quickSearch: true,
        toggledF: false,
        positionF: 1,
      },
      
    ],
  },
  {
    id: "2",
    single: '2',
    name: 'Private',
    count: 4,
    userCreated: 1,
    toggled: false,
    expanded: false,
    fieldGroupId: 2,
    position: 2,
    fields: [],
  },
  {
    id: "3",
    single: '3',
    name: 'System',
    count: 7,
    userCreated: 1,
    toggled: false,
    expanded: false,
    fieldGroupId: 3,
    position: 3,
    fields: [
      
        {
        id: '1',
        fieldName: "USER CREATED Field 2",
        scope: "Global",
        fieldType: "Date",
        user: "Claire Briley",
        //fieldGroupId: 3,
        familyTagging: false,
        quickSearch: true,
        toggledF: false,
        positionF: 1,
      },
      {
        id: '2',
        fieldName: "USER CREATED Field 3",
        scope: "Global",
        fieldType: "Date",
        user: "Claire Briley",
        //fieldGroupId: 3,
        familyTagging: true,
        quickSearch: false,
        toggledF: true,
        positionF: 2,
      },
      
    ],
  },
  {
    id: "4",
    single: '4',
    name: 'USER CREATED',
    count: 3,
    userCreated: 2,
    toggled: false,
    expanded: false,
    fieldGroupId: 4,
    position: 4,
    fields: [],
  },
 

];
