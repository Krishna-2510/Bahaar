package com.example.demo.service;

import com.example.demo.entity.Garden;
import com.example.demo.entity.Image;
import com.example.demo.entity.Plant;
import com.example.demo.repository.GardenRepository;
import com.example.demo.repository.ImageRepository;
import com.example.demo.repository.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

@Service
public class PlantServiceImpl implements PlantService {
    @Autowired
    private PlantRepository plantRepo;

    @Autowired
    private GardenRepository gardenRepo;

    @Autowired
    private ImageRepository imageRepo;

    @Override
    public Plant addPlant(String name, MultipartFile image, String gardenId, String water, String fertilizer, String sunlight, String note) {
        String imageUrl = saveImage(image, name);
        LocalDate currentDate = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String formattedDate = currentDate.format(formatter);
        Plant plant  = new Plant(gardenId, name, water, sunlight, fertilizer, note, imageUrl, formattedDate);
        plantRepo.save(plant);
        Garden garden = gardenRepo.findById(gardenId).orElseThrow();
        garden.setNumberOfPlants(garden.getNumberOfPlants() + 1);
        gardenRepo.save(garden);
        return plant;
    }

    private String saveImage(MultipartFile image, String name) {
        try {
            byte[] bytes = image.getBytes();
            String imageId = UUID.randomUUID().toString();
            String imageUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/images/")
                    .path(imageId)
                    .toUriString();
            Image imageObject = new Image(imageId, bytes);
            imageObject.setName(name+"_Image");
            imageRepo.save(imageObject);
            return imageUrl;
        } catch (IOException e) {
            throw new RuntimeException("Could not save image", e);
        }
    }

    @Override
    public List<Plant> findPlantsByGardenId(String gardenId) {
        List<Plant> plants = plantRepo.findByGardenId(gardenId);
        return plants;
    }

    @Override
    public String deletePlant(String plantId) {
        plantRepo.deleteById(plantId);
        return plantId;
    }
}
