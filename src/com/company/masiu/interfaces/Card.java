package com.company.masiu.interfaces;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class Card {

  private String[] ranks;
  private  String[] suits;
  private int[] hand;

  public Card() {
    this.suits = new String[]{"Spades", "Hearts", "Diamonds", "Clubs"};
    this.ranks = new String[]{"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};
    this.hand = new int[0];
  }

  public String getRandomCard() {
    List<String> cardsList;
    cardsList = Arrays.asList(ranks);
    Random rand = new Random();
    String randomElement = cardsList.get(rand.nextInt(cardsList.size()));
    return randomElement;
  }

  public String[] shuffleCards() {
    String[] xs = this.ranks;
    List<String> stringList = Arrays.asList(xs);
    Collections.shuffle(stringList);
    stringList.toArray(xs);
    return xs;
  }

  public String[] getRanks() {
    return ranks;
  }

  public String[] getSuits() {
    return suits;
  }

  public int[] getHand() {
    return hand;
  }

  @Override
  public String toString() {
    return "Card{" +
           "ranks=" + Arrays.toString(ranks) +
           ", suits=" + Arrays.toString(suits) +
           ", hand=" + Arrays.toString(hand) +
           '}';
  }
}
