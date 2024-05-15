import { Test, TestingModule } from '@nestjs/testing';
import { BreedController } from './breed.controller';
import { BreedService } from './breed.service';

describe('BreedController', () => {
  let breedController: BreedController;
  let breedService: BreedService;

  const mockBreedDetails = {
    name: 'Labrador Retriever',
    description: 'Friendly and outgoing',
    size: 'Medium to Large',
    origin: 'Canada, United Kingdom',
    lifeExpectancy: '10-12 years',
    temperament: ['Friendly', 'Outgoing', 'Gentle', 'Intelligent'],
    image: 'https://example.com/labrador.jpg',
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BreedController],
      providers: [
        {
          provide: BreedService,
          useValue: {
            getBreedDetails: jest.fn().mockReturnValue(mockBreedDetails),
          },
        },
      ],
    }).compile();

    breedController = module.get<BreedController>(BreedController);
    breedService = module.get<BreedService>(BreedService);
  });

  describe('getBreedDetails', () => {
    it('should return breed details', () => {
      const breedName = 'Labrador Retriever';
      expect(breedController.getBreedDetails(breedName)).toEqual(
        mockBreedDetails
      );
      expect(breedService.getBreedDetails).toHaveBeenCalledWith(breedName);
    });
  });
});
