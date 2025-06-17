# Private Key Storage Guidelines

This project occasionally needs to store blockchain-related private keys. Follow these guidelines to avoid creating a potential backdoor or exposing the keys to malware:

1. **Avoid committing raw private keys**: Do not store plaintext keys directly in the repository. Instead, encrypt them using a strong passphrase and secure algorithm.
2. **Use environment variables**: Reference keys through environment variables or a secret management tool, so they are not present in the codebase.
3. **Keep backups secure**: Any backups of your keys should be encrypted and stored separately from the repository.
4. **Audit access**: Regularly review who has access to encrypted keys to minimize the risk of unauthorized access.

By following these practices, you can keep your keys safe without leaving your project vulnerable.
