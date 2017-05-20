import * as Assets from '../assets';

/**
 * Preload all game resources here
 */
export default class Preloader extends Phaser.State {
    private nextState: string = 'connection';

    public preload(): void {
        // Load tilemap
        this.game.load.tilemap('mapdata', Assets.Atlases.MapMap.getJSONHash(), null, Phaser.Tilemap.TILED_JSON);

        //  Next we load the tileset. This is just an image, loaded in via the normal way we load images:
        this.game.load.image('mapimage', Assets.Atlases.MapMap.getPNG());

        // Load entities graphics
        this.game.load.image(Assets.Images.ImagesBox.getName(), Assets.Images.ImagesBox.getPNG());
        this.game.load.image(Assets.Images.ImagesStonegenerator.getName(), Assets.Images.ImagesStonegenerator.getPNG());
        this.game.load.image(Assets.Images.ImagesWoodgenerator.getName(), Assets.Images.ImagesWoodgenerator.getPNG());
        this.game.load.image(Assets.Images.ImagesWinterstonegenerator.getName(), Assets.Images.ImagesWinterstonegenerator.getPNG());
        this.game.load.image(Assets.Images.ImagesWinterwoodgenerator.getName(), Assets.Images.ImagesWinterwoodgenerator.getPNG());
        this.game.load.image(Assets.Images.ImagesEgg.getName(), Assets.Images.ImagesEgg.getPNG());
        this.game.load.image(Assets.Images.ImagesCarrot.getName(), Assets.Images.ImagesCarrot.getPNG());
        this.game.load.image(Assets.Images.ImagesMeat.getName(), Assets.Images.ImagesMeat.getPNG());
        this.game.load.image(Assets.Images.ImagesWoodwall.getName(), Assets.Images.ImagesWoodwall.getPNG());  
        this.game.load.image(Assets.Images.ImagesStonewall.getName(), Assets.Images.ImagesStonewall.getPNG());  
        this.game.load.image(Assets.Images.ImagesGarden.getName(), Assets.Images.ImagesGarden.getPNG());  
        this.game.load.image(Assets.Images.ImagesTower.getName(), Assets.Images.ImagesTower.getPNG());  
        this.game.load.image(Assets.Images.ImagesDoor.getName(), Assets.Images.ImagesDoor.getPNG());  
        this.game.load.image(Assets.Images.ImagesHeartstone.getName(), Assets.Images.ImagesHeartstone.getPNG());  
        this.game.load.image(Assets.Images.ImagesKnight.getName(), Assets.Images.ImagesKnight.getPNG());  
        this.game.load.image(Assets.Images.ImagesGardener.getName(), Assets.Images.ImagesGardener.getPNG());  
        this.game.load.image(Assets.Images.ImagesGuard.getName(), Assets.Images.ImagesGuard.getPNG());  
        this.game.load.image(Assets.Images.ImagesFollower.getName(), Assets.Images.ImagesFollower.getPNG());  
        this.game.load.image(Assets.Images.ImagesFoodcrate.getName(), Assets.Images.ImagesFoodcrate.getPNG());  
        this.game.load.image(Assets.Images.ImagesWoodcrate.getName(), Assets.Images.ImagesWoodcrate.getPNG());  
        this.game.load.image(Assets.Images.ImagesStonecrate.getName(), Assets.Images.ImagesStonecrate.getPNG());
        this.game.load.image(Assets.Images.ImagesCarwolf.getName(), Assets.Images.ImagesCarwolf.getPNG());
        this.game.load.image(Assets.Images.ImagesUnmount.getName(), Assets.Images.ImagesUnmount.getPNG());
        this.game.load.image(Assets.Images.ImagesMannequin.getName(), Assets.Images.ImagesMannequin.getPNG());
        this.game.load.image(Assets.Images.ImagesPickupbot.getName(), Assets.Images.ImagesPickupbot.getPNG());
        this.game.load.image(Assets.Images.ImagesBuild.getName(), Assets.Images.ImagesBuild.getPNG());
        this.game.load.image(Assets.Images.ImagesSoccerball.getName(), Assets.Images.ImagesSoccerball.getPNG());


        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesChicken.getName(), Assets.Atlases.AtlasesChicken.getPNG(), Assets.Atlases.AtlasesChicken.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesKnight.getName(), Assets.Atlases.AtlasesKnight.getPNG(), Assets.Atlases.AtlasesKnight.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesGuard.getName(), Assets.Atlases.AtlasesGuard.getPNG(), Assets.Atlases.AtlasesGuard.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesGardener.getName(), Assets.Atlases.AtlasesGardener.getPNG(), Assets.Atlases.AtlasesGardener.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesFollower.getName(), Assets.Atlases.AtlasesFollower.getPNG(), Assets.Atlases.AtlasesFollower.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesPig.getName(), Assets.Atlases.AtlasesPig.getPNG(), Assets.Atlases.AtlasesPig.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesWolf.getName(), Assets.Atlases.AtlasesWolf.getPNG(), Assets.Atlases.AtlasesWolf.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesBear.getName(), Assets.Atlases.AtlasesBear.getPNG(), Assets.Atlases.AtlasesBear.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesWhitebear.getName(), Assets.Atlases.AtlasesWhitebear.getPNG(), Assets.Atlases.AtlasesWhitebear.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesCarpig.getName(), Assets.Atlases.AtlasesCarpig.getPNG(), Assets.Atlases.AtlasesCarpig.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesDoor.getName(), Assets.Atlases.AtlasesDoor.getPNG(), Assets.Atlases.AtlasesDoor.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesCarwolf.getName(), Assets.Atlases.AtlasesCarwolf.getPNG(), Assets.Atlases.AtlasesCarwolf.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesPickupbot.getName(), Assets.Atlases.AtlasesPickupbot.getPNG(), Assets.Atlases.AtlasesPickupbot.getJSONHash());
    }

    private waitForSoundDecoding(): void {
        // There is no sound decoding for now
        // AssetUtils.Loader.waitForSoundDecoding(this.startGame, this);
    }
    
    public create() {
        this.game.state.start(this.nextState);
    }
}