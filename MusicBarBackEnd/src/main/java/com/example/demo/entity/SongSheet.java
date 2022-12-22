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
@Table(name="songsheet")
public class SongSheet {
	
	 @Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	 @Column(name="s_id")
	 private int sId;
	 @Column(name="s_name")
	 private String sName;
	 @Column(name="s_img")
	 private String sImg;
	 @Column(name="s_desc")
	 private String sDesc;
	 @Column(name="s_writer")
	 private String sWriter;
	 @Column(name="s_price")
	 private String sPrice;
	 
	 
	@OneToMany(mappedBy = "songSheet")
	private Set<OrdersBy> ordersBy;
	


	public SongSheet() {}


	public SongSheet(int sId, String sName, String sImg, String sDesc, String sWriter, String sPrice) {
	super();
	this.sId = sId;
	this.sName = sName;
	this.sImg = sImg;
	this.sDesc = sDesc;
	this.sWriter = sWriter;
	this.sPrice = sPrice;
	}



	public int getsId() {
		return sId;
	}

	public void setsId(int sId) {
		this.sId = sId;
	}

	public String getsName() {
		return sName;
	}

	public void setsName(String sName) {
		this.sName = sName;
	}

	public String getsDesc() {
		return sDesc;
	}

	public void setsDesc(String sDesc) {
		this.sDesc = sDesc;
	}

	public String getsWriter() {
		return sWriter;
	}

	public void setsWriter(String sWriter) {
		this.sWriter = sWriter;
	}
	
	public String getsPrice() {
		return sPrice;
	}

	public void setsPrice(String sPrice) {
		this.sPrice = sPrice;
	}

	public String getsImg() {
		return sImg;
	}

	public void setsImg(String sImg) {
		this.sImg = sImg;
	}


	@Override
	public String toString() {
		return "SongSheet [sId=" + sId + ", sName=" + sName + ", sImg=" + sImg + ", sDesc=" + sDesc + ", sWriter="
				+ sWriter + ", sPrice=" + sPrice + "]";
	}

}
