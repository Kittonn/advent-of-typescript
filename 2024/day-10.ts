enum Gift {
  Coal = 0b00000,
  Train = 0b00001,
  Bicycle = 0b00010,
  SuccessorToTheNintendoSwitch = 0b00100,
  TikTokPremium = 0b01000,
  Vape = 0b10000,
  Traditional = 0b00001 | 0b00010,
  OnTheCouch = 0b11010 & ~0b00010 | 0b00100,
  OnTheMove = 0b00000 | 0b00010 | 0b01000 | 0b10000,
}
