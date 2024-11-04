package com.example.demo.entity;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

import org.springframework.data.annotation.Id;

@Document(collection = "plants")
public class Plant {
    @Id
    private String id;
    private String gardenId;
    private String name;
    private String addedOn;
    private String water;
    private String sunlight;
    private String fertilizer;
	private String note;
	private String imageUrl;

	public Plant(String gardenId, String name, String water, String sunlight, String fertilizer, String note, String imageUrl, String addedOn) {
		this.gardenId = gardenId;
		this.name = name;
		this.water = water;
		this.sunlight = sunlight;
		this.fertilizer = fertilizer;
		this.note = note;
		this.imageUrl = imageUrl;
		this.addedOn = addedOn;
	}
    
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getGardenId() {
		return gardenId;
	}
	public void setGardenId(String gardenId) {
		this.gardenId = gardenId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddedOn() {
		return addedOn;
	}
	public void setAddedOn(String addedOn) {
		this.addedOn = addedOn;
	}
	public String getWater() {
		return water;
	}
	public void setWater(String water) {
		this.water = water;
	}
	public String getSunlight() {
		return sunlight;
	}
	public void setSunlight(String sunlight) {
		this.sunlight = sunlight;
	}
	public String getFertilizer() {
		return fertilizer;
	}
	public void setFertilizer(String fertilizer) {
		this.fertilizer = fertilizer;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
    
    
}
