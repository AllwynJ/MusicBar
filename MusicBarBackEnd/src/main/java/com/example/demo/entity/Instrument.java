package com.example.demo.entity;


import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="instrument")
public class Instrument {
		
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="in_id")
	private int inId;
	
	@Column(name="in_name")
	private String inName;
	
	@Column(name="in_img")
	private String inImg;
	
	@Column(name="in_price")
	private  int inPrice;
	
	@Column(name="in_desc")
	private String inDesc;
	
	@OneToMany(mappedBy = "instruments")
	private Set<Tutor> tutor;
	
	@OneToMany(mappedBy = "instruments")
	private Set<OrdersBy> ordersBy;
	
	public Instrument() {}

	public Instrument(int inId, String inName, String inImg, int inPrice, String inDesc) {
		super();
		this.inId = inId;
		this.inName = inName;
		this.inImg = inImg;
		this.inPrice = inPrice;
		this.inDesc = inDesc;
	}

	public int getInId() {
		return inId;
	}

	public void setInId(int inId) {
		this.inId = inId;
	}

	public String getInName() {
		return inName;
	}

	public void setInName(String inName) {
		this.inName = inName;
	}

	public String getInImg() {
		return inImg;
	}

	public void setInImg(String inImg) {
		this.inImg = inImg;
	}

	public int getInPrice() {
		return inPrice;
	}

	public void setInPrice(int inPrice) {
		this.inPrice = inPrice;
	}

	public String getInDesc() {
		return inDesc;
	}

	public void setInDesc(String inDesc) {
		this.inDesc = inDesc;
	}

	@Override
	public String toString() {
		return "Instruments [inId=" + inId + ", inName=" + inName + ", inImg=" + inImg + ", inPrice=" + inPrice
				+ ", inDesc=" + inDesc + "]";
	}
}
