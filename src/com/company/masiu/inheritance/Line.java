package com.company.masiu.inheritance;

public class Line {

  private final long start;
  private final long end;
  private long length;
  private boolean hasChanged;

  public Line(long start, long end) {
    this.start = start;
    this.end = end;
    this.length = 0;
    this.hasChanged = false;
  }

  public long getStart() {
    return start;
  }

  public long getEnd() {
    return end;
  }

  public long getLength() {
    if (hasChanged) {
      long newLength = start + end;
      length = newLength;
      setHasChanged(true);
      return newLength;
    }
    setHasChanged(false);
    return length;
  }

  private void setHasChanged(boolean condition) {
    hasChanged = condition;
  }
}
