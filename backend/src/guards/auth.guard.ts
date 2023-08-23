import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    
    // const token = request.headers['authorization']?.split(' ')[1] || request.cookies['token'];

    // if (!token) {
    //   return false;
    // }

    try {
    //   const payload = this.jwtService.verify(token);
    //   request.user = payload;

      return true;
    } catch (error) {
      return false;
    }
  }
}