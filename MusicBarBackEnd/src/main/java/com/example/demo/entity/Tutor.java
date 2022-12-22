package com.example.demo.entity;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="tutor")
public class Tutor {
		
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="t_id")
	private int tId;

	@Column(name="t_name")
	private String tName;

	@Column(name="t_ins")
	private String tIns;

	@Column(name="in_id")
	private int inId;
	
	@Column(name="t_fee")
	private int tFee;
	
	@Column(name="t_img")
	private String tImg;
	
	@Column(name="t_desc")
	private String tDesc;
	



	@ManyToOne(targetEntity=Instrument.class,fetch = FetchType.EAGER) 
	@JoinColumn(name="in_id",insertable = false, updatable = false)
	private Instrument instruments;
	
	@OneToMany(mappedBy = "tutor")
	private Set<OrdersBy> ordersBy;

	public Tutor() {}



	public Tutor(int tId, String tName, String tIns, int inId, int tFee, String tImg, String tDesc) {
		super();
		this.tId = tId;
		this.tName = tName;
		this.tIns = tIns;
		this.inId = inId;
		this.tFee = tFee;
		this.tImg = tImg;
		this.tDesc = tDesc;
	}

	public int gettId() {
		return tId;
	}

	public void settId(int tId) {
		this.tId = tId;
	}

	public String gettName() {
		return tName;
	}

	public void settName(String tName) {
		this.tName = tName;
	}

	public String gettIns() {
		return tIns;
	}

	public void settIns(String tIns) {
		this.tIns = tIns;
	}

	public int gettFee() {
		return tFee;
	}

	public void settFee(int tFee) {
		this.tFee = tFee;
	}
	
	public int getInId() {
		return inId;
	}

	public void setInId(int inId) {
		this.inId = inId;
	}
	
	public String gettImg() {
		return tImg;
	}

	public void settImg(String tImg) {
		this.tImg = tImg;
	}
	
	public String gettDesc() {
		return tDesc;
	}

	public void settDesc(String tDesc) {
		this.tDesc = tDesc;
	}

	@Override
	public String toString() {
		return "Tutors [tId=" + tId + ", tName=" + tName + ", tIns=" + tIns + ", inId=" + inId + ", tFee=" + tFee + ", tImg=" + tImg + ", tDesc=" + tDesc +  "]";
	}
}
