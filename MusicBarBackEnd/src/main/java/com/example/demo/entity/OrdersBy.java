package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="orderby")
public class OrdersBy {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="o_id")
    private int oId;

    @Column(name="u_id")
    private int uId;

    @Column(name="s_id")
    private int sId;

    @Column(name="in_id")
    private int inId;
    
    @Column(name="t_id")
    private int tId;
    
	@Column(name="s_units")
	private int sUnits;
	
	@Column(name="in_units")
	private int inUnits;
	
	@Column(name="t_units")
	private int tUnits;
	

    
    
	@ManyToOne(targetEntity=Instrument.class,fetch = FetchType.EAGER) 
	@JoinColumn(name="in_id",insertable = false, updatable = false)
	private Instrument instruments;

	@ManyToOne(targetEntity=Tutor.class,fetch = FetchType.EAGER) 
	@JoinColumn(name="t_id",insertable = false, updatable = false)
	private Tutor tutor;
	
	@ManyToOne(targetEntity=SongSheet.class,fetch = FetchType.EAGER) 
	@JoinColumn(name="s_id",insertable = false, updatable = false)
	private SongSheet songSheet;
	
	@ManyToOne(targetEntity=User.class,fetch = FetchType.EAGER) 
	@JoinColumn(name="u_id",insertable = false, updatable = false)
	private User user;
	
    public OrdersBy() {}


	public OrdersBy(int oId, int uId, int sId, int inId, int tId, int sUnits, int inUnits, int tUnits) {
		super();
		this.oId = oId;
		this.uId = uId;
		this.sId = sId;
		this.inId = inId;
		this.tId = tId;
		this.sUnits = sUnits;
		this.inUnits = inUnits;
		this.tUnits = tUnits;
	}



	public int getoId() {
		return oId;
	}

	public void setoId(int oId) {
		this.oId = oId;
	}

	public int getuId() {
		return uId;
	}

	public void setuId(int uId) {
		this.uId = uId;
	}

	public int getsId() {
		return sId;
	}

	public void setsId(int sId) {
		this.sId = sId;
	}

	public int getInId() {
		return inId;
	}

	public void setInId(int inId) {
		this.inId = inId;
	}

	public int gettId() {
		return tId;
	}

	public void settId(int tId) {
		this.tId = tId;
	}

	public int getsUnits() {
		return sUnits;
	}

	public void setsUnits(int sUnits) {
		this.sUnits = sUnits;
	}

	public int getInUnits() {
		return inUnits;
	}

	public void setInUnits(int inUnits) {
		this.inUnits = inUnits;
	}

	public int gettUnits() {
		return tUnits;
	}

	public void settUnits(int tUnits) {
		this.tUnits = tUnits;
	}


	@Override
	public String toString() {
		return "OrdersBy [oId=" + oId + ", uId=" + uId + ", sId=" + sId + ", inId=" + inId + ", tId=" + tId
				+ ", sUnits=" + sUnits + ", inUnits=" + inUnits + ", tUnits=" + tUnits + "]";
	
	}
    
    
}