package com.example.demo;

import com.example.demo.entity.Plant;
import com.example.demo.service.PlantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PlantController {
    @Autowired
    private PlantService plantService;

    public PlantController(PlantService plantService) {
        this.plantService = plantService;
    }

    @GetMapping("/{gardenId}/plants")
    public ResponseEntity<List<Plant>> getPlantsByGardenId(@PathVariable String gardenId){
        List<Plant> plants = plantService.findPlantsByGardenId(gardenId);
        System.out.println("THIS IS THE LIST = " + plants);
        return new ResponseEntity<>(plants, HttpStatus.OK);
    }

    @PostMapping("/addPlant")
    public ResponseEntity<Plant> addPlant(@RequestParam("name") String name,
                                          @RequestParam("image") MultipartFile image,
                                          @RequestParam("gardenId") String gardenId,
                                          @RequestParam("water") String water,
                                          @RequestParam("sunlight") String sunlight,
                                          @RequestParam("fertilizer") String fertilizer,
                                          @RequestParam("note") String note){
        Plant plant = plantService.addPlant(name, image, gardenId, water, fertilizer, sunlight, note);
        return new ResponseEntity<>(plant, HttpStatus.CREATED);
    }

    @DeleteMapping("/deletePlant/{plantId}")
    public ResponseEntity<String> deletePlant(@PathVariable String plantId){
        String response = plantService.deletePlant(plantId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


}