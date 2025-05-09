# 3D Furniture Models

This directory contains the 3D models for the furniture items in the application. Each model should be in GLB format and follow these guidelines:

## Model Requirements

1. File Format: GLB (Binary GLTF)
2. Scale: 1 unit = 1 meter
3. Origin: Center of the object at (0,0,0)
4. Orientation: 
   - Front of the object facing positive Z
   - Top of the object facing positive Y
   - Right side facing positive X

## Model Naming Convention

Models should be named according to their type:
- dining-chair.glb
- armchair.glb
- office-chair.glb
- bar-stool.glb
- dining-table.glb
- round-table.glb
- coffee-table.glb
- side-table.glb
- 2-seater.glb
- 3-seater.glb
- corner-sofa.glb
- loveseat.glb
- bookshelf.glb
- cabinet.glb
- wardrobe.glb
- tv-stand.glb

## Creating Models

You can create your models using any 3D modeling software that supports GLB export, such as:
- Blender
- Maya
- 3ds Max
- SketchUp

## Model Optimization

For best performance:
1. Keep polygon count reasonable (under 50k triangles per model)
2. Use efficient UV mapping
3. Optimize textures (max 2048x2048 resolution)
4. Use PBR materials when possible

## Adding New Models

1. Create your model following the requirements above
2. Export as GLB
3. Place the file in this directory
4. Update the `furnitureModels.js` configuration file with the new model's path and settings 