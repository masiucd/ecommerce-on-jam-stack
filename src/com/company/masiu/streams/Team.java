package com.company.masiu.streams;

public class Team {

  private final String name;
  private final String ultras;
  private final int created;

  public Team(String name, String ultras, int created) {
    this.name = name;
    this.ultras = ultras;
    this.created = created;
  }

  public String getName() {
    return name;
  }

  public String getUltras() {
    return ultras;
  }

  public int getCreated() {
    return created;
  }

  public String presentTeam() {
    return String.format("%s ultras is %s and was founded year %d", getName(), getUltras(), getCreated());
  }
}
