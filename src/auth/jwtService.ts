import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { payload } from './dto/payload.dto';
// import { JsonPayload } from './interfaces/jwt_payload.td';

@Injectable()
export class JwtServices {
  private readonly secretKey = 'jdsg7%uh4324%d$hgds';

  generateToken(payload:payload): string {
    return jwt.sign(payload, this.secretKey, { expiresIn: '59m' });
  }

  verifyToken(token: string):any{
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      return null;
    }
  }
}