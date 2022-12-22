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
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="u_id")
	private int uId;
	
	@Column(name="u_name")
	private String uName;
	
	@Column(name="u_email")
	private String uEmail;
	
	@Column(name="u_address")
	private String uAddress;
	
	@Column(name="u_phoneno")
	private long uPhoneNo;
	
	@Column(name="u_password")
	private String uPassword;
	
	@Column(name="u_type")
	private String uType;
	
	
	@OneToMany(mappedBy = "user")
	private Set<OrdersBy> ordersBy;
	
	public User() {}


	public User(int uId, String uName, String uEmail, String uAddress, long uPhoneNo, String uPassword, String uType) {
		super();
		this.uId = uId;
		this.uName = uName;
		this.uEmail = uEmail;
		this.uAddress = uAddress;
		this.uPhoneNo = uPhoneNo;
		this.uPassword = uPassword;
		this.uType = uType;
	}
	
	
	public int getuId() {
		return uId;
	}
	
	
	public void setuId(int uId) {
		this.uId = uId;
	}
	
	
	public String getuName() {
		return uName;
	}
	
	
	public void setuName(String uName) {
		this.uName = uName;
	}
	
	
	public String getuEmail() {
		return uEmail;
	}
	
	
	public void setuEmail(String uEmail) {
		this.uEmail = uEmail;
	}
	
	
	public String getuAddress() {
		return uAddress;
	}
	
	
	public void setuAddress(String uAddress) {
		this.uAddress = uAddress;
	}
	
	
	public long getuPhoneNo() {
		return uPhoneNo;
	}
	
	
	public void setuPhoneNo(long uPhoneNo) {
		this.uPhoneNo = uPhoneNo;
	}
	
	
	public String getuPassword() {
		return uPassword;
	}
	
	
	public void setuPassword(String uPassword) {
		this.uPassword = uPassword;
	}
	
	
	public String getuType() {
		return uType;
	}
	
	
	public void setuType(String uType) {
		this.uType = uType;
	}
	
	
	@Override
	public String toString() {
		return "Users [uId=" + uId + ", uName=" + uName + ", uEmail=" + uEmail + ", uAddress=" + uAddress + ", uPhoneNo="
				+ uPhoneNo + ", uPassword=" + uPassword + ", uType=" + uType + "]";
	}
}
