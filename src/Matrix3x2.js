export class Matrix3x2 {
  constructor(m11 = 1, m12 = 0, m21 = 0, m22 = 1, m31 = 0, m32 = 0) {
    this.m11 = m11; this.m12 = m12
    this.m21 = m21; this.m22 = m22
    this.m31 = m31; this.m32 = m32
  }

  static identity() {
    return new Matrix3x2()
  }

  static createRotation(radians) {
    const cos = Math.cos(radians)
    const sin = Math.sin(radians)
    return new Matrix3x2(cos, sin, -sin, cos, 0, 0)
  }

  static createTranslation(x, y) {
    return new Matrix3x2(1, 0, 0, 1, x, y)
  }

  static createScale(x, y) {
    return new Matrix3x2(x, 0, 0, y, 0, 0)
  }

  multiply(other) {
    return new Matrix3x2(
      this.m11 * other.m11 + this.m12 * other.m21,
      this.m11 * other.m12 + this.m12 * other.m22,
      this.m21 * other.m11 + this.m22 * other.m21,
      this.m21 * other.m12 + this.m22 * other.m22,
      this.m31 * other.m11 + this.m32 * other.m21 + other.m31,
      this.m31 * other.m12 + this.m32 * other.m22 + other.m32
    )
  }

  getTranslation() {
    return { x: this.m31, y: this.m32 }
  }
}
