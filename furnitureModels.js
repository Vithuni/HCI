export const furnitureModels = {
  tables: [
    {
      id: 'table-1',
      name: 'Modern Table 1',
      path: '/models/Tables/table1.glb',
      category: 'tables',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 1.2,
        depth: 0.8,
        height: 0.75
      }
    },
    {
      id: 'table-2',
      name: 'Modern Table 2',
      path: '/models/Tables/table2.glb',
      category: 'tables',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 1.4,
        depth: 0.9,
        height: 0.75
      }
    },
    {
      id: 'table-3',
      name: 'Modern Table 3',
      path: '/models/Tables/table3.glb',
      category: 'tables',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 1.6,
        depth: 1.0,
        height: 0.75
      }
    },
    {
      id: 'dining-table',
      name: 'Dining Table',
      path: '/models/Tables/dinningtable.glb',
      category: 'tables',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 1.8,
        depth: 1.2,
        height: 0.75
      }
    },
    {
      id: 'dining-table-set-1',
      name: 'Dining Table Set 1',
      path: '/models/Tables/dinningtableset1.glb',
      category: 'tables',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 2.0,
        depth: 1.4,
        height: 0.75
      }
    },
    {
      id: 'dressing-table-1',
      name: 'Dressing Table 1',
      path: '/models/Tables/dressingtable1.glb',
      category: 'tables',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 1.2,
        depth: 0.6,
        height: 0.75
      }
    },
    {
      id: 'dressing-table',
      name: 'Dressing Table',
      path: '/models/Tables/dressingtable.glb',
      category: 'tables',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 1.4,
        depth: 0.7,
        height: 0.75
      }
    }
  ],
  sofas: [
    {
      id: 'sofa-1',
      name: 'Modern Sofa 1',
      path: '/models/Sofa/sofa1.glb',
      category: 'sofas',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 2.2,
        depth: 0.9,
        height: 0.85
      }
    },
    {
      id: 'sofa-2',
      name: 'Modern Sofa 2',
      path: '/models/Sofa/sofa2.glb',
      category: 'sofas',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 2.4,
        depth: 0.95,
        height: 0.9
      }
    },
    {
      id: 'sofa-set-3',
      name: 'Luxury Sofa Set 3',
      path: '/models/Sofa/sofaset3.glb',
      category: 'sofas',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 2.8,
        depth: 1.1,
        height: 0.95
      }
    },
    {
      id: 'sofa-set-4',
      name: 'Premium Sofa Set 4',
      path: '/models/Sofa/sofaset4.glb',
      category: 'sofas',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 3.0,
        depth: 1.2,
        height: 1.0
      }
    }
  ],
  beds: [
    {
      id: 'bed-1',
      name: 'Modern Bed 1',
      path: '/models/Beds/bed1.glb',
      category: 'beds',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 1.6,
        depth: 2.0,
        height: 0.5
      }
    },
    {
      id: 'bed-2',
      name: 'Modern Bed 2',
      path: '/models/Beds/bed2.glb',
      category: 'beds',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 1.8,
        depth: 2.2,
        height: 0.55
      }
    }
  ],
  cupboards: [
    {
      id: 'cupboard-1',
      name: 'Modern Cupboard 1',
      path: '/models/Cupboards/cupboard.glb',
      category: 'cupboards',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 1.2,
        depth: 0.6,
        height: 2.0
      }
    },
    {
      id: 'cupboard-2',
      name: 'Modern Cupboard 2',
      path: '/models/Cupboards/cupboard2.glb',
      category: 'cupboards',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 1.4,
        depth: 0.7,
        height: 2.2
      }
    }
  ],
  tvSets: [
    {
      id: 'tv-stand',
      name: 'TV Stand',
      path: '/models/Tvset/tv-stand.glb',
      category: 'tvSets',
      scale: 1,
      rotation: [0, 0, 0],
      dimensions: {
        width: 1.4,
        depth: 0.4,
        height: 0.5
      }
    }
  ]
};

// Helper function to get all models
export const getAllModels = () => {
  return Object.values(furnitureModels).flat();
};

// Helper function to get models by category
export const getModelsByCategory = (category) => {
  return furnitureModels[category] || [];
};

// Helper function to get model by ID
export const getModelById = (id) => {
  return getAllModels().find(model => model.id === id);
}; 