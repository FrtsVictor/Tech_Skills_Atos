import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async loginUserReturningPayload() {
    const email = '';
    const password = 'loginUserDto';
    const result = await this.query(
      `SELECT 
        id as ID,
        usertype as TYPE 
      FROM dbo.endusers e 
        WHERE e.email = @0 AND dbo.fn_md5(@1) = password`,
      [email, password],
    );
    return null;
  }
}
